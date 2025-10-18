import Routes, { navigateScreen } from '@/app/common/Routes';
import CommonButton from '@/app/components/CommonButton/CommonButton';
import { Colors, Fonts } from '@/constants/theme';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ListRenderItemInfo,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

interface Doctor {
    id: string;
    name: string;
    image: any;
}

const doctorsData: Doctor[] = [
    { id: '1', name: 'Dr. John Doe', image: require('../../../assets/images/avatar-image.png') },
    { id: '2', name: 'Dr. Jane Smith', image: require('../../../assets/images/avatar-image.png') },
    { id: '3', name: 'Dr. Emily White', image: require('../../../assets/images/avatar-image.png') },
    { id: '4', name: 'Dr. Robert Brown', image: require('../../../assets/images/avatar-image.png') },
];

const DoctorListScreen: React.FC = () => {
    const [checkedDoctors, setCheckedDoctors] = useState<string[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    const toggleCheck = (id: string) => {
        setCheckedDoctors((prev) =>
            prev.includes(id) ? prev.filter((docId) => docId !== id) : [...prev, id]
        );
    };

    const filteredDoctors = doctorsData.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const renderItem = ({ item }: ListRenderItemInfo<Doctor>) => (
        <View style={styles.doctorRow}>
            <Image source={item.image} style={styles.doctorImage} />
            <Text style={styles.doctorName}>{item.name}</Text>
            <Checkbox.Android
                status={checkedDoctors.includes(item.id) ? 'checked' : 'unchecked'}
                onPress={() => toggleCheck(item.id)}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <Image
                        source={require("../../../assets/icons/search.png")}
                        style={styles.searchIcon}
                        tintColor={Colors.textLight}
                    />
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search doctor..."
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
            </View>

            <View style={styles.header}>
                <Text style={styles.summaryTitle}>List</Text>
                <Image
                    source={require("../../../assets/icons/contact.png")}
                    style={{ width: 24, height: 24, resizeMode: "contain" }}
                />
            </View>

            <FlatList
                data={filteredDoctors}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 100 }} // leave space for bottom button
            />

            {/* Fixed Bottom Button */}
            <View style={styles.bottomButton}>
                <CommonButton
                    onPress={() => navigateScreen(Routes.documentSuccess)}
                    backgroundColor="#000"
                    color="#fff"
                    title="Send Report"
                />
            </View>
        </View>
    );
};

export default DoctorListScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    searchContainer: { paddingHorizontal: 16 },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 12,
    },
    searchBar: { flex: 1, height: 40 },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    summaryTitle: { fontSize: 20, fontFamily: Fonts.Bold },
    doctorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderColor: Colors.strokeColor,
    },
    doctorName: { flex: 1, fontSize: 16, marginLeft: 8 },
    doctorImage: { width: 52, height: 52, borderRadius: 26 },
    searchIcon: { width: 20, height: 20, marginEnd: 10 },

    bottomButton: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 10,
    },
});
