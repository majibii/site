import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const decryptOptions = {
    chars: [
        // Syntax & structure
        "{", "}", "[", "]", "(", ")", "<", ">", ":", ",", ".", "-", "/", "*", "~",

        // Logic & math
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "=", "+", "-", "*", "%", "&", "|", "!", "?",

        // IA / vector DB semantics
        "q", "k", "v", "d",     // query, key, value, dimension
        "r", "a", "g",            // retrieval-augmented generation (RAG)
        "e", "m", "b",            // embedding
        "i", "n", "x",            // index

        // ML notation & Greek letters
        "λ", "θ", "μ", "α", "β",

        // Villes symboliques (autorisées)
        "C", "A", "D", "I", "Z",
        "P", "R", "S"
    ],
    interval: 50,
};

export const TextDecrypt = (props) => {
    const { result, dencrypt } = useDencrypt(decryptOptions);

    useEffect(() => {
        const updateText = () => {
            dencrypt(props.text || "");
        };

        const action = setTimeout(updateText, 0);

        return () => clearTimeout(action);
    }, [dencrypt, props.text]);

    return (
        <p>
            {result}&nbsp;
        </p>
    );
};
