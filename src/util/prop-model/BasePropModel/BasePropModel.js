class BasePropModel {
    constructor(name,label,config) {
        this.name = name;
        this.label = label;
        if (!/Object/.test(Object.prototype.toString.call(config))) {
            this.defaultValue = config;
        } else {
            this.required = config.required;
            this.defaultValue = config.defaultValue;
            this.option = config.option;
        }
    }
}

export default BasePropModel
