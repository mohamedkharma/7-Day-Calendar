import React from "react";
import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>         
            </thead>
            <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">9 am</td>
                    <Event event='Starbucks ☕️' color ='green'/>
                    <td></td>
                    <td></td>
                    <Event event='Starbucks ☕️' color ='green'/>
                    <td></td>
                    <td></td>
                    <Event event='Starbucks ☕️' color ='green'/>
                </tr>
                <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <Event event='Gym 🏋️‍♀️' color='orange' location= "Planet Fitness"/>
                    <td></td>
                    <Event event='Gym 🏋️‍♀️' color='orange' location= "Planet Fitness"/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <Event event='Gym 🏋️‍♀️' color='orange' location= "Planet Fitness"/>
                    <td></td>
                    <Event event='Gym 🏋️‍♀️' color='orange' location= "Planet Fitness"/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">12 am</td>
                    <Event event='Dhuhr Prayer 🌞' color='blue'/>
                    <Event event='Dhuhr Prayer 🌞' color='blue'/>
                    <Event event='Dhuhr Prayer 🌞' color='blue'/>
                    <Event event='Dhuhr Prayer 🌞' color='blue'/>
                    <Event event='Dhuhr Prayer 🌞' color='blue'/>
                    <Event event='Joma Prayer 🌞' color='blue'/>
                    <Event event='Dhuhr Prayer 🌞' color='blue'/>
                </tr>
                <tr>
                    <td className="time">1 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='Yolk 🍳' color ='green'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Yolk 🍳' color ='green'/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3 pm</td>
                    <Event event='Asr Prayer 🌇' color='green'/>
                    <Event event='Asr Prayer 🌇' color='green'/>
                    <Event event='Asr Prayer 🌇' color='green'/>
                    <Event event='Asr Prayer 🌇' color='green'/>
                    <Event event='Asr Prayer 🌇' color='green'/>
                    <Event event='Asr Prayer 🌇' color='green'/>
                    <Event event='Asr Prayer 🌇' color='green'/>
                </tr>
                <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color ='pink'/>
                    <td></td>
                    <Event event='Subway 🚊' color ='pink'/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">5 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='Fancy Dinner 🎩' color ='green' location='Maple & Ash'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Fancy Dinner 🎩' color ='green' location='Maple & Ash'/>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default Calendar;