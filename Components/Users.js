import React,{Component} from 'react';

export default class Users extends Component{

    state = {
        data:this.props.data,
        all:this.props.data
        
    }

    select = (event) => {
        let id =[];
        let data = [];
        let $container = document.querySelectorAll('input');

        document.querySelector('.idselect p span').innerHTML = event.target.value

        $container.forEach(item => {
            if(item.checked){
                id.push(parseInt(item.value))
            }
        })
        
        if(id.length > 0){
            id.forEach(item => {
                let filter = this.state.all.filter(each => each.userId == item);
                filter.forEach(json => data.push(json))
                
            })

            document.querySelector('.list p span').innerHTML = data.length

            this.setState({data});
        } else {
            this.setState({data:this.state.all})
        }

                
    }

    render(){
       return (
        <div className="container">
           <div className="aside" id="checkbox-container" >
                <div>
                    <label htmlFor="one">id One</label>
                    <input type="checkbox" id="one" value="1" onClick={this.select} />
                </div> 

                <div>
                    <label htmlFor="two">id two</label>
                    <input type="checkbox" id="two" value="2" onClick={this.select} />
                </div>

                <div>
                    <label htmlFor="three">id three</label>
                    <input type="checkbox" id="three" value="3" onClick={this.select} />
                </div>

                <div>
                    <label htmlFor="four">four</label>
                    <input type="checkbox" id="four"  value="4" onClick={this.select} />
                </div>
            </div>
       
       <div className="users-container">
            {
                this.state.data.map(item => (
                    <div className="user" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                       <h4>{item.userId}</h4>  
                    </div>
                ))
            }
        </div>
        </div>)
    }

}
