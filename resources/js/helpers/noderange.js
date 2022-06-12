export class NodeRange {
    constructor(
        $from,
        $to,
        depth
    ) {}
    get start() { return this.$from.before(this.depth + 1) }
    get end() { return this.$to.after(this.depth + 1) }
    get parent() { return this.$from.node(this.depth) }
    get startIndex() { return this.$from.index(this.depth) }
    get endIndex() { return this.$to.indexAfter(this.depth) }
}