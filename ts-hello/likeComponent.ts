

export class LikeComponent {
    private _likesCount: number;
    private _isSelected: boolean;
    test: number;

    constructor(pLikesCount: number, pIsSelected: boolean, pTest: number) {
        this._likesCount = pLikesCount;
        this._isSelected = pIsSelected;
        this.test = pTest;
    }

    onClick() {
        this.test++;
        /**         if (this.isSelected) {
                   this._likesCount--;
                   this._isSelected = false;
               }
               else {
                   this.likesCount++;
                   this.isSelected = true;
               }*/


        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected(){
        return this._isSelected;
    }

}
