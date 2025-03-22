import React from "react";
import { GiCook } from "react-icons/gi";
import ReactMarkdown from "react-markdown";
import Header from "../layout/Header";
import { dotWave } from "ldrs";
import { motion, useInView } from "framer-motion";

const Chat = ({ messages, isLoading }) => {
  dotWave.register();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-[#121212] p-6 overflow-x-hidden">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <l-dot-wave size="78" speed="1.4" color="#82b29a" />
        </div>
      )}

      <Header ShowBurger={true} className="py-0" />

      <motion.div
        ref={ref}
        className="bg-[#1E1E1E] mt-4 shadow-xl rounded-2xl p-6 border border-[#2A2A2A] max-w-2xl md:max-w-7xl w-full opacity-0"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Ícone + Título */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GiCook className="text-[#82b29a] text-4xl" />
          <h2 className="text-2xl font-bold text-[#82b29a]">Receita Gerada</h2>
        </motion.div>

        {/* Conteúdo Markdown formatado */}
        <ReactMarkdown
          className="prose prose-invert max-w-none"
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-bold text-[#82b29a] flex items-center gap-2">
                {props.children}
              </h2>
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-semibold text-[#a1c1b3] flex items-center gap-2">
                {props.children}
              </h3>
            ),
            h4: ({ node, ...props }) => (
              <h4 className="text-lg font-semibold text-[#c1d8cd] flex items-center gap-2">
                {props.children}
              </h4>
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside mt-2 text-[#d1d5db] space-y-1">
                {props.children}
              </ul>
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside mt-2 space-y-2 text-[#d1d5db] marker:text-[#F4A261]">
                {props.children}
              </ol>
            ),
            li: ({ node, ...props }) => (
              <motion.li
                className="leading-relaxed text-[#d1d5db] transition-colors duration-200"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                {props.children}
              </motion.li>
            ),
            p: ({ node, ...props }) => (
              <p className="text-[#d1d5db] leading-relaxed">{props.children}</p>
            ),
          }}
        >
          {messages}
        </ReactMarkdown>
      </motion.div>
    </div>
  );
};

export default Chat;
