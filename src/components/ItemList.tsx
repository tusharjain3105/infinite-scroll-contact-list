import { useContext, useEffect, useState } from "preact/hooks";
import { DataContext } from "../providers/DataProvider";
import Spinner from "./Spinner";

export default () => {
  const { fetchData } = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<object[]>([]);

  // Set isloading to false when data is updated
  useEffect(() => setIsLoading(false), [data]);

  // Fetch data when isLoading is true
  useEffect(() => {
    if (isLoading) {
      let controller = new AbortController();
      setIsLoading(true);
      fetchData(controller).then((_data: object[]) => {
        setData([...data, ..._data]);
      });
      return () => controller.abort();
    }
  }, [isLoading]);

  // Add event listener on first render
  useEffect(() => {
    let lastScroll = scrollY;
    addEventListener("scroll", () => {
      let curScoll = scrollY;
      if (lastScroll < curScoll) {
        // Moving Down
        document.querySelector("nav").style.top = "-100%";
      } else {
        // Moving Up
        document.querySelector("nav").style.top = "0";
      }
      let scrollHeight = document.body.scrollHeight;
      if (scrollY > scrollHeight - 2 * visualViewport.height) {
        setIsLoading(true);
      }
      lastScroll = curScoll;
    });
  }, []);

  return (
    <main class="list">
      {data.map((item: any) => (
        <Item item={item} />
      ))}
      {isLoading && <Spinner />}
    </main>
  );
};

const Item = ({ item }) => {
  const name = `${item.name.first} ${item.name.last}`;
  const address = `${item.location.street.number}, ${item.location.street.name}, ${item.location.city}, ${item.location.state}, ${item.location.country} - ${item.location.postcode}`;
  return (
    <div className="item">
      <div className="left">
        <img src={item.picture.large} alt={name} />
      </div>
      <div className="right">
        <div className="title">
          {name} ({item.dob.age})
        </div>
        
        <small className="phone">
          <strong>Phone:</strong> {item.phone}
        </small>

        <small className="email">
          <strong>Email:</strong> {item.email}
        </small>
        <small className="address">
          <strong>Address:</strong> {address}
        </small>
      </div>
    </div>
  );
};
