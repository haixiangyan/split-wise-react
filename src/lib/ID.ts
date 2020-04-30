class ID {
  private static initId = 0
  public value: number

  constructor() {
    ID.initId += 1

    this.value = ID.initId
  }
}

export default ID
