interface Events {
  [propName: string]: Array<Function>
}
export class EventHub {
  private events: Events = {}
  /**
   * $on
   */
  public $on (eventName: string, callback: Function): void {
    if (!this.events.hasOwnProperty(eventName)) {
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }

  public $emit (eventName: string, data: any) {
    if (this.events.hasOwnProperty(eventName)) {
      this.events[eventName].forEach((fn) => {
        fn(data)
      })
    } else {
      console.log(`you must subsribe ${eventName} first`)
    }
  }

  public $off (eventName: string) {
    if (this.events.hasOwnProperty(eventName)) {
      delete this.events[eventName]
    }
  }
}

// const bus = new EventHub()

// bus.$on('say', (message: string) => {
//   console.log(message)
// })

// bus.$emit('say', 'hello world!')
