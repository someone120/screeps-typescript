import CreepExtend from "mount/creep/creep";

class harvester extends CreepExtend implements CreepInterface {
  work() {
    if (this.memory.source == undefined) {
      this.memory.source = this.room.memory.sourceRemain.pop();
    }

    if (this.memory.source == undefined) {
      this.suicide();
      return;
    }
    let source = Game.getObjectById(this.memory.source);
    if (source != undefined && source.pos.isNearTo(this.pos)) {
      this.goto(source!.pos);
      return;
    }
    let dest = this.pos.findInRange(FIND_STRUCTURES, 1).filter(it => {
      it.structureType == STRUCTURE_CONTAINER || it.structureType == STRUCTURE_LINK;
    });

    if (dest.length == 0) {
      this.pos.createConstructionSite(STRUCTURE_CONTAINER);
    }
    this.harvest(source!);
  }
}
