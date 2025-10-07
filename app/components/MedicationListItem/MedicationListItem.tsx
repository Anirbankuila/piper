import { Medication } from "@/app/common/Interface/Medication";
import React from "react";
import { Text, View } from "react-native";
import styles from "./MedicationListItem.styles";
interface medicationListItemProps {
  medication: Medication;
  showStatus: boolean;
}
const MedicationListItem: React.FC<medicationListItemProps> = ({
  medication,
  showStatus,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{medication.name}</Text>
        {showStatus && <Text style={styles.time}>{medication.time}</Text>}
      </View>
      <View style={styles.divider}></View>
      <View style={styles.rightContainer}>
        {showStatus ? (
          <Text style={styles.details}>
            {medication.dosage} · {medication.schedule}
          </Text>
        ) : (
          <Text style={styles.details}>{medication.dosage}</Text>
        )}

        {showStatus && (
          <View style={styles.statusContainer}>
            <View
              style={[
                styles.statusDot,
                {
                  backgroundColor:
                    medication.status === "Taken" ? "#01BA38" : "#FF5252",
                },
              ]}
            />
            <Text style={styles.statusText}>{medication.status}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default MedicationListItem;
