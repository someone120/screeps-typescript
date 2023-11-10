interface SpawnTask {
  tasks: [{
    type: string;
    prior: number;
    data: string | undefined;
  }]
}

interface SpawnTimer {
  tasks: [
    {
      type: string;
      finishTime: number;
      prior: number;
      data: string | undefined;
    }
  ]
}

function pushTask(type: string, prior: number, room: string, data: string | undefined) {
  Memory.spawnTask[room].tasks.push(
    {
      type: type,
      prior: prior,
      data: data
    }
  )
}

function pushTimer(type: string, finishTime: number, prior: number, room: string, data: string | undefined) {
  Memory.spawnTimer[room].tasks.push(
    {
      type: type,
      prior: prior,
      data: data,
      finishTime:finishTime,
    }
  )
}
