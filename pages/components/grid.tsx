import { motion, AnimatePresence } from "framer-motion";

type Props = {
  attempts: string[];
  currentAttempt: string;
};

type BoxProps = {
  word: string;
};

const Box = (props: BoxProps) => {
  return (
    <>
      {props.word.split("").map((letter) => {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="box flex justify-center items-center"
          >
            <h1 className="text-3xl text-center text-white">{letter}</h1>
          </motion.div>
        );
      })}
    </>
  );
};

const grid = (props: Props) => {
  return (
    <div className="grid grid-cols-5 gap-1">
      {props.attempts.map((word, id) => {
        return (
          <AnimatePresence>
            <Box word={word} key={id} />
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default grid;
