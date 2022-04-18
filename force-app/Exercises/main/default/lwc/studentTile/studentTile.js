import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {
    
    @api 
    student = {
        Name: '[Himanshu Joshi]',
        PhotoUrl: '/services/images/photo/003B0FakePictId',
        };

    get tileSelected() 
    {
        return this.isSelected ? "tile selected" : "tile";
    }

    studentClick(){
        alert(this.student.Name);
    }

}