import { collection, getDocs, doc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      // getDocs -> to get multiple documents
      // getDoc -> to get single document
      const querySnapshot = await getDocs(collection(db, "users")); // (db, collectionName)
      setUsers(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    };
    getUsers();
  }, []);

  return (
    <MediumContext.Provider value={{ posts, users }}>
      {children}
    </MediumContext.Provider>
  );
};
export { MediumContext, MediumProvider };
