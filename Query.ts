


export class Query {
    private query:string;
    private stack=[];
    private wasCommand=false;
    private order="";
    constructor(private table:string)
    {
        this.query="("
    }

    public Asc(field)
    {
        this.order="("+field+" asc)";
        return this;
    }
    public Desc(field)
    {
        this.order="("+field+" desc)";
        return this;
    }
    public Where(field,value,operation='='):Query
    {
        this.wasCommand=true;
        this.query+=field+operation+JSON.stringify(value).replace(/\"/g,"'");
        return this;
    }

    public AndGroup()
    {
        this.wasCommand=false;
        this.stack.push(this.query);
        this.query="&((";
        return this;
    }

    public Ungroup()
    {
        if(this.wasCommand)
        {
            this.query=this.stack.pop()+this.query+"))";
        }
        else{
            this.query=this.stack.pop();
        }
        return this;
    }

    public And():Query
    {
        this.query+=")&(";
        return this;
    }

    public Or():Query
    {
        this.query+=")|(";
        return this;
    }

    public ToString():string
    {
        this.query+=")";
        if(this.query === '()') this.query = '';
        return this.table+"["+this.query+"]"+this.order;
    }

}