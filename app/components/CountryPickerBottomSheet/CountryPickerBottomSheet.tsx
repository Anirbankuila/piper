import countries from "@/countries.json"; // your JSON file
import { Ionicons } from "@expo/vector-icons";
import React, {
    ForwardedRef,
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

interface Country {
  name: string;
  code: string;
}

interface CountryPickerProps {
  onSelectCountry?: (country: Country) => void;
  label?: string;
}

export interface CountryPickerRef {
  open: () => void;
  close: () => void;
}

const CountryPickerRBSheet = (
  { onSelectCountry, label }: CountryPickerProps,
  ref: ForwardedRef<CountryPickerRef>
) => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const rbSheetRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    open: () => rbSheetRef.current?.open(),
    close: () => rbSheetRef.current?.close(),
  }));

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = countries.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const clearSearch = () => {
    setSearch("");
    setFilteredCountries(countries);
  };

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    onSelectCountry?.(country);
    rbSheetRef.current?.close();
  };

  const getFlagEmoji = (countryCode: string) =>
    countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt(0))
      );

  return (
    <View>
      {/* Input Box */}
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        style={styles.inputBox}
        activeOpacity={0.8}
        onPress={() => rbSheetRef.current?.open()}
      >
        <Text
          style={[
            styles.inputText,
            !selectedCountry && { color: "#999" },
          ]}
        >
          {selectedCountry
            ? `${getFlagEmoji(selectedCountry.code)} ${selectedCountry.name}`
            : "Select Country"}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#666" />
      </TouchableOpacity>

      {/* Bottom Sheet */}
      <RBSheet
        ref={rbSheetRef}
        height={500}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 16,
            paddingTop: 10,
          },
        }}
      >
        <View style={styles.sheetContent}>
          <Text style={styles.title}>Select Country</Text>

          {/* Search Box with clear icon */}
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search country..."
              value={search}
              onChangeText={handleSearch}
              placeholderTextColor="#888"
            />
            {search.length > 0 && (
              <TouchableOpacity onPress={clearSearch} style={styles.clearBtn}>
                <Ionicons name="close-circle" size={20} color="#888" />
              </TouchableOpacity>
            )}
          </View>

          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item.code}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.countryItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.countryName}>
                  {getFlagEmoji(item.code)} {item.name}
                </Text>
                <Text style={styles.countryCode}>{item.code}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </RBSheet>
    </View>
  );
};

export default forwardRef(CountryPickerRBSheet);

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    color: "#333",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  inputText: {
    fontSize: 16,
    color: "#333",
  },
  sheetContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
  clearBtn: {
    marginLeft: 8,
  },
  countryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },
  countryName: {
    fontSize: 16,
  },
  countryCode: {
    fontSize: 14,
    color: "#666",
  },
});
