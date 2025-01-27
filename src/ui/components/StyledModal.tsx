import { ReactElement } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

import global from "@ui/style.ts";

import StyledText, { Size } from "@components/StyledText.tsx";

import useColor from "@stores/color.ts";

import { Overlay } from "@rneui/base";

interface IProps {
    visible: boolean;

    title?: string;
    children?: ReactElement | ReactElement[] | any | undefined;

    style?: StyleProp<ViewStyle> | any;
    overlayStyle?: StyleProp<ViewStyle>;

    onLayout?: () => void;
    onPressOutside?: () => void;
}

function StyledModal(props: IProps) {
    const colors = useColor();

    return (
        <Overlay
            isVisible={props.visible}
            style={props.overlayStyle}
            onLayout={props.onLayout}
            onBackdropPress={props.onPressOutside}
            overlayStyle={{ backgroundColor: "transparent" }}>
            <View
                style={{
                    ...style.StyledModal,
                    backgroundColor: colors.secondary,
                    ...props.style,
                }}>
                {props.title && (
                    <StyledText text={props.title} bold size={Size.Subheader} />
                )}
                {props.children}
            </View>
        </Overlay>
    );
}

export default StyledModal;

const style = StyleSheet.create({
    StyledModal: {
        borderRadius: 25,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        padding: global.padding,
    },
});
