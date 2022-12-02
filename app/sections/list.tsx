import { groupBy } from 'lodash';
import moment from 'moment';
import Row from './row';

const getMatches = async () => {
  const response = await fetch('https://worldcupjson.net/matches');
  return response.json();
};

const List = async () => {
  const matches: Match[] = await getMatches();
  const getMatchDate = (item: Match) => moment(item.datetime).format('YYYY-MM-DD');
  const matchesByDate = groupBy(matches, getMatchDate);

  return (
    <>
      {Object.keys(matchesByDate).map((date, index) => (
        <div key={index}>
          <Row matches={matchesByDate[date]} date={date} />
        </div>
      ))}
    </>
  );
};

export default List;
