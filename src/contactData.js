export const database = {
    entries: [],
    addEntry(entry) {
      this.entries.push(entry);
    },
    getEntries() {
      return this.entries;
    }
  };
  