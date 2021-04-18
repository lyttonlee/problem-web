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

  public $off (eventName: string, fn: Function) {
    if (this.events.hasOwnProperty(eventName)) {
      const index = this.events[eventName].findIndex((f) => f === fn)
      if (index !== -1) {
        this.events[eventName].splice(index, 1)
      }
    }
  }
}

// const bus = new EventHub()

// bus.$on('say', (message: string) => {
//   console.log(message)
// })

// bus.$emit('say', 'hello world!')
