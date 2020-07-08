
class ComponentInfo {
    constructor(option) {
        this.name = option.name;
        this.version = option.version;
        this.label = option.gdcLabel;
        this.description = option.gdcDescription;
        this.businessType = option.gdcBusinessType;
        this.propInfos = option.propInfos;
        this.slotConfigs = option.slotConfigs;
        this.stylePropInfos = option.styleConfig;
    }
    static getInstanceFromJson (option) {
        return new ComponentInfo(option);
    }
}
export default ComponentInfo;
