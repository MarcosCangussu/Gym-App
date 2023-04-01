import { useState } from "react";
import { Heading, VStack, SectionList, Text } from "native-base";
import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "21.03.2023",
      data: ["Puxada frontal", "Remada baixa"],
    },
    {
      title: "22.03.2023",
      data: ["Puxada frontal", "Remada baixa"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.300" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && {flex: 1, justifyContent:"center"}}
        ListEmptyComponent={() => (
          <Text color="gray.200" textAlign="center">
            Não há exercícios registrados ainda!
          </Text>
        )}
      />
    </VStack>
  );
}
