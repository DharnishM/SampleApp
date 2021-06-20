import Component from '@glimmer/component';

export default class FilterComponent extends Component {
    get results(){
    let {booking,querys}=this.args;
    console.log(querys);
    if(querys)
    {
        booking=booking.filter((movies)=>movies.title.includes(querys));
    }
    return booking;
    }
}
