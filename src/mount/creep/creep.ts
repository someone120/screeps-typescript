
export default class CreepExtend extends Creep {
  public goto(pos: RoomPosition): ERR_NO_PATH | CreepMoveReturnCode {
    if (this.memory.path == undefined) {
      let path = this.pos.findPathTo(pos)
      if (path.length <= 0) {
        return ERR_NO_PATH
      }
      this.memory.path = {
        path: this.serializePath(path),
        index: 0
      }
    }
    let result = this.move(
      Number(
        this.memory.path.path.split("")[this.memory.path.index]
      ) as DirectionConstant
    )
    if (result == OK) {
      this.memory.path.index++;
    }
    return result;
  }

  public serializePath(path: PathStep[]): string {
    let result = ""
    for (let i of path) {
      result += i.direction.toString();
    }
    return result
  }
}
