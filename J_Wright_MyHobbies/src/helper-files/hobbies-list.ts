import {Hobby} from "./Hobby";

export class hobbiesList {
    static hobbyCount = 0;
    private _items: Hobby[];

    constructor(item: Hobby){
        this._items = [];
        this._items[hobbiesList.hobbyCount] = item;
        this.increaseCount();
    }

    get items(): Hobby[]{
        return this._items;
    }

    addItems(item: Hobby){
        this._items.push(item);
    }

    getItemsLength(): number{
        return this._items.length;
    }

    increaseCount(){
        return ++hobbiesList.hobbyCount;
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
