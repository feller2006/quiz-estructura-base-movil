import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { initDatabase } from "./src/infrastructure/database/database";

export default function App() {

  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <View style={{ padding: 40 }}>
      <Text>
        Quiz Estructura Base Móvil
      </Text>

      <Button
        title="Registrar Usuarios"
        onPress={() => {}}
      />

      <Button
        title="Registrar Productos"
        onPress={() => {}}
      />

      <Button
        title="Registrar Personas"
        onPress={() => {}}
      />
    </View>
  );
}