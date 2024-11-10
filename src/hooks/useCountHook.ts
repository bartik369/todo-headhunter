const useCountHook = () => {
    const getItemValues = (count: number, rules:string[]) => {
        const result = new Intl.PluralRules('en-En').select(count);
        switch (result) {
            case 'one':
                return `${count} ${rules[0]}`;
            case 'few':  
                return `${count} ${rules[1]}`;
            default:
                return `${count} ${rules[1]}`;
        }
    }
    return [getItemValues]
}

export {useCountHook}