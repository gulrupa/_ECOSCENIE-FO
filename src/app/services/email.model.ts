
export class Email {

  constructor(
    public sender: string,
    public receiver: string,
    public object: string,
    public addField1: string,
    public content?: string
  ) {  }

}
