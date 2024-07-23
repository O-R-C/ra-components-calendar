export default class Item {
  constructor(brand, title, description, descriptionFull, price, currency) {
    this.brand = brand
    this.title = title
    this.description = description
    this.descriptionFull = descriptionFull
    this.price = price.toFixed(2)
    this.currency = currency
  }
}
