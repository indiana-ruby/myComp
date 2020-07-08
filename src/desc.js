import pkg from '../package.json'
import {
    RadioModel,
    TextModel,
    BooleanModel,
    ComponentInfo
} from "./util/prop-model/index.js";

let propInfos = [
    new TextModel(
        "name",
        "名称",
        ''
    ),
    new RadioModel(
        "mode",
        "样式",
        {   
            defaultValue: 1,
            option: [{
                optionLabel: '单列',
                optionName: 'single',
                optionValue: 1
            }, {
                optionLabel: '双列',
                optionName: 'double',
                optionValue: 2
            }]
        }
    ),
    new BooleanModel(
        'spec',
        '商品列表默认收起，收起后默认展示两行，对泳道样式无效',
        false
    ),
    new TextModel(
        "package",
        "商品包",
        ""
    ),
];
// propInfos = propInfos.concat(commonProps.propInfos);
// 样式配置
// const styleConfig = new GroupModel('_styleConfig', '样式配置', null);
const { ddcLabel, ddcBusinessType, ddcDescription } = pkg.ddc;
const desc = ComponentInfo.getInstanceFromJson({
    name: pkg.name,
    version: pkg.version,
    label: ddcLabel,
    description: ddcDescription,
    businessType: ddcBusinessType,
    propInfos: propInfos,
    slotConfigs: [],
    stylePropInfos: [],
})

export default desc
