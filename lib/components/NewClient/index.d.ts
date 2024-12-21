import React from 'react';
interface NewClientProps {
    onSubmit: (data: Record<string, string>) => void;
    fields: string[];
    title: string;
    subTitle?: string;
    styles?: {
        container?: object;
        input?: object;
        button?: object;
        buttonText?: object;
        title?: object;
        subTitle?: object;
    };
}
declare const NewClient: React.FC<NewClientProps>;
export default NewClient;
