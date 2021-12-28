---
title: DropdownNav
path: component/dropdown-nav
group: Navigation
---

## DropdownNav

DropdownNav is used for accept links

It can only be used under specific circumstances. If the use conditions are not met, it can be encapsulated by Dropdown.

### API

| Props           | Description                            | Type     | Default      |
| ------------ | ----------------------------- | ------ | -------- |
| navTitle        | nav title                     | string   | `下拉导航`     |
| trigger        | trigger type                      | `hover` `click`   | `hover`     |
| navList     | array of nav | `Array<{key: string, label: string}>`   | `[]`   |
| onItemClick      | Item click callback                      | `(event, key) => void`   | `noop`   |

