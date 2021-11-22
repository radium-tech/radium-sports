import OptionBottomMenuModel from '../model/optionBottomMenu';

export default function updateOption(option: OptionBottomMenuModel, currentPath: string) {
  if (option.link === currentPath) {
    return new OptionBottomMenuModel(option.title, option.iconPath, option.link, true);
  }
  return option;
}
