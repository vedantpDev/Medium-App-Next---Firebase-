import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db, auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const getPosts = async () => {
      const queryShanpshot = await getDocs(collection(db, "articles"));
      setPosts(
        queryShanpshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    };
    getPosts();
  }, []);

  const addUserToFirebase = async (user) => {
    await setDoc(doc(db, "users", user.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0,
    });
  };

  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const user = userData.user;
    setUser(user);
    addUserToFirebase(user);
  };

  return (
    <MediumContext.Provider value={{ posts, users, handleUserAuth, user }}>
      {children}
    </MediumContext.Provider>
  );
};
export { MediumContext, MediumProvider };
