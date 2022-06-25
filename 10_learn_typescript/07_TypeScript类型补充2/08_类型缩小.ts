// 1. 使用 typeof 进行类型缩小
type IDType = number | string
function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 2. 使用 === !== switch 进行平等类型的缩小
type Direction = "left" | "right" | "top" | "bottom"
function printDirection(direction: Direction) {
  // 使用 === 进行 if 判断
  // if (direction === 'left') {
  //   console.log(direction)
  // } else if ()

  // 使用 switch 进行判断
  switch (direction) {
    case 'left':
      console.log('left');
      break;
    default:
      break;
  }

}


// 3.使用 instanceof 对复杂类型进行 类型缩小
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString())
  } else {
    console.log(time)
  }
}

class Student {
  studying() {}
}

class Teacher {
  teaching() {}
}

function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying()
  } else {
    p.teaching()
  }
}

const stu = new Student()
work(stu)


// 4. 使用 in 进行类型缩小
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming()
  } else {
    animal.running()
  }
}

const fish: Fish = {
  swimming() {
    console.log("swimming")
  }
}

walk(fish)






export{}