//NOT UNDERSTOOD !!!!

function Process(state: string) {
  this.state = state;
}

const Singleton = (function () {
  function ProcessManager(): void {
    this.numProcess = 0;
  }

  let pManager: any;
  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) {
        pManager = createProcessManager();
      } else {
        return pManager;
      }
    },
  };
})();

const processManager = Singleton.getProcessManager();

const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2);
