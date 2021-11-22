export default class OptionBottomMenuModel {
  #iconPath: string

  #link: string

  #selected: boolean

  constructor(iconPath: string, link: string, selected = false) {
    this.#iconPath = iconPath;
    this.#link = link;
    this.#selected = selected;
  }

  get iconPath() {
    return this.#iconPath;
  }

  get link() {
    return this.#link;
  }

  get selected() {
    return this.#selected;
  }

  select() {
    const selected = true;
    return new OptionBottomMenuModel(this.iconPath, this.link, selected);
  }
}
