export default class OptionBottomMenuModel {
  #title: string

  #iconPath: string

  #link: string

  #selected: boolean

  constructor(title: string, iconPath: string, link: string, selected = false) {
    this.#title = title;
    this.#iconPath = iconPath;
    this.#link = link;
    this.#selected = selected;
  }

  get title() {
    return this.#title;
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
}
