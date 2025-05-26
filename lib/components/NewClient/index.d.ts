import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
type Language = 'en' | 'pt';
interface NewClientProps {
    onSubmit: (data: Record<string, string>) => void;
    fields: string[];
    title?: string;
    subTitle?: string;
    language?: Language;
    styles?: {
        container?: StyleProp<ViewStyle>;
        input?: StyleProp<ViewStyle>;
        button?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
    };
}
declare const NewClient: React.FC<NewClientProps>;
export default NewClient;
