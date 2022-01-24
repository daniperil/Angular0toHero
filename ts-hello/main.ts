import { LikeComponent } from "./likeComponent";

let component = new LikeComponent(10, true, 0);
component.onClick();

console.log(`Likes count: ${component.likesCount}, Is selected ${component.isSelected}`);
console.log(component.test);