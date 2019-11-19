import React, { Component } from 'react';
import Card from './Card';
import Navbar from './Navbar'


class User extends Component {
    constructor() {
        super();
        this.state = {
            data:[ {
                icon:"user",
                color:"primary",
                count:"23235",
                name:"Users",
            },
           {
            icon:"facebook",
            color:"primary",
            count:"23235",
            name:"Users",
            },
             {
                icon:"whatsapp",
                color:"primary",
                count:"23235",
                name:"Users",
            },
            { icon:"instagram",
            color:"primary",
            count:"23235",
            name:"Users",
            }
]
            

        }
    }
    render() {
        return (
            <div className="Container-fluid mt-3">
                 <Navbar/>
                <div className="row">
                    {
                        this.state.data.map((val, index) => {
                          return(
                              <Card
                              icon={val.icon}
                              color={val.color}
                              name={val.name}
                              count={val.count}/>
                          )
                        })
                    }

                    {/* <Card icon={this.state.cardOne.icon}
                    color={this.state.cardOne.color}
                    count={this.state.cardOne.count}
                    name={this.state.cardOne.name} */}

                        />
                    {/* <Card icon="user" color="primary" count="23235" name="Users"/>
                <Card icon="money" color="secondary" count="556226" name="Employees"/>
                <Card icon="facebook" color="danger" count="48622" name="Services"/>
                <Card icon="instagram" color="success" count="865930" name="Revenue"/> */}

                </div>
            </div>
            
        );}
}
export default User;