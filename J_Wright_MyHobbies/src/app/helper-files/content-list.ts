import {Content} from "./content-interface";

export class ContentList{
    static hobbyCount = 0;
    private _items: Content[];

    constructor(item: Content){
        this._items = [];
        this._items[ContentList.hobbyCount] = item;
        this.increaseCount();
    }

    get items(): Content[]{
        return this._items;
    }

    addItems(item: Content){
        this._items.push(item);
    }

    getItemsLength(): number{
        return this._items.length;
    }

    increaseCount(){
        return ++ContentList.hobbyCount;
    }

    getItemAt(itemIndex: number){
        if(itemIndex > this._items.length - 1){
            return `There was an error. The index ${itemIndex} is larger than the length of the array.`;
        }else{
            let item = this._items[itemIndex];
            let title = item.title;
            let description = item.description;
            let creator = item.creator;
            let imgURL = item.imgURL;
            let type = item.type;

            let returnString = 
                `
                    <div> Title: ${title} </div>
                    <div> Description: ${description} </div>
                    <div> Creator: ${creator} </div>
                    <div> Type: ${type} </div>
                    <img src="${imgURL}">
                `;
            return returnString;
        }

    }
}