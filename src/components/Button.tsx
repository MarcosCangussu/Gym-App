import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline"
};

export function Button({ title, variant = "solid", ...rest }: Props) {
  return (
    <ButtonNativeBase
      {...rest}
      w="full"
      h={14}
      bg={variant == "outline" ? "transparent" : "green.700"}
      borderWidth={variant == "outline" ? 1 : 0}
      borderColor="green.500"
      _pressed={{
        bg: variant == "outline" ? "gray.600" : "green.500",
      }}
    >
      <Text
        color={variant == "outline" ? "green.500" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}