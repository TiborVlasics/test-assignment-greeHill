function ActionHistory(props) {
  return (<div>
    <table>
      <tbody>
    <tr>
      <th>dev</th>
      <th>qa</th>
      <th>prod</th>
    </tr>
    {props.actionStack.map((action, i) => {
      return <tr key={i} style={{ backgroundColor: props.currentIndex === i ? '#ff9393': '#fff'}}>
        <td>{mapActionPropValue(action, 'dev')}</td>
        <td>{mapActionPropValue(action, 'qa')}</td>
        <td>{mapActionPropValue(action, 'prod')}</td>
      </tr>
    })}
    </tbody>
    </table>
  </div>)
}

function mapActionPropValue(action, key) {
  if(action[key] === true) {
    return 'true';
  } else if (action[key] === false) {
    return 'false';
  } else {
    return '';
  }
}

export default ActionHistory;