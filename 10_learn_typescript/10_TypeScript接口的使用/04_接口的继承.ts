interface ISwim {
  swimming:() => void
}

interface IFly {
  flying: ()=>void
}

interface IAction extends ISwim, IFly{
  
}

const actiion: IAction = {
  swimming() {
    
  },
  flying() {
    
  }
}

export{}