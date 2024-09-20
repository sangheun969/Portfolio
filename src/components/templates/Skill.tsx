import React from "react";
import {
  ReactIcon,
  RecoilIcon,
  JsIcon2,
  TypeScriptIcon,
  ReactQIcon,
  NodeJSIcon,
  TailwindIcon,
  WebSocketIcon,
  SolidityIcon,
  NextIcon,
  MySQLIcon,
  AWSS3Icon,
  GithubActionsIcon,
  ExpressJSIcon,
  EC2Icon,
} from "../../image/";
import { motion } from "framer-motion";

const Skill: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        y: { duration: 1 },
      }}
    >
      <div className="w-full h-full py-[120px] flex flex-col items-center bg-[#15181B] mobile:w-[520px]">
        <div className="">
          <p className="text-center font-bold text-[50px] text-white">Skills</p>
        </div>
        <div className="w-[80%] h-full pt-[80px] flex flex-col gap-8">
          <div className="relative w-full h-full">
            <div className="py-1 px-4 my-5 text-xl border-2 rounded-2xl w-[260px]">
              <p className="text-white">#Programing Languages</p>
            </div>
            <div className="flex flex-row gap-5 py-5">
              <div className="relative border-1 border-gray-500 shadow-indigo-500/40 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={JsIcon2}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px]"
                  />
                  <span className="text-white">Javascript</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li className="">
                    <p className="text-xs">
                      자바스크립트의 변수 선언, 함수 정의, 비동기 프로그래밍,
                      DOM 조작 등을 이해하고 활용할 수 있습니다.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={TypeScriptIcon}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px]"
                  />
                  <span className="text-white">Typecript</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      타입스크립트의 정적 타입 시스템, 인터페이스, 제네릭, 모듈,
                      그리고 타입 검사 기능을 이해하고 활용 수 있습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full">
            <div className="py-1 px-4 my-5 text-xl border-2 rounded-2xl w-[230px]">
              <p className="text-white">#Framework/ Library</p>
            </div>
            <div className="flex flex-row gap-5 py-5 mobile:flex-wrap">
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={ReactIcon}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px]"
                  />
                  <span className="text-white">ReactJS</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      ReactJS의 컴포넌트 기반 아키텍처, 상태 관리, 훅, 라우팅,
                      그리고 라이프사이클 메서드를 이해하고 활용할 수 있습니다.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={ReactQIcon}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px]"
                  />
                  <span className="text-white">ReactQuery</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      서버 상태 관리, 데이터 패칭, 캐싱, 그리고 상태 동기화의
                      효율적인 방법을 활용할 수 있습니다.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={RecoilIcon}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px]"
                  />
                  <span className="text-white">Recoil</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      애플리케이션 상태를 전역적으로 관리하고, 상태를 효율적으로
                      공유하며, 복잡한 상태 로직을 간단하게 처리하는 방법을 이해
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={NodeJSIcon}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px]"
                  />
                  <span className="text-white">NodeJS</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      서버의 API를 구축할 수 있으며, DB와 연동하여 CRUD 기능을
                      수행할 수 있습니다.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={ExpressJSIcon}
                    alt="Javascript"
                    className="object-contain bg-white w-[60px] h-[60px]"
                  />
                  <span className="text-white">Express</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      웹 서버 구축을 위한 라우팅, 미들웨어 관리, 그리고 RESTful
                      API 개발 가능.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={WebSocketIcon}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px] bg-white"
                  />
                  <span className="text-white">WebSocket</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      실시간 양방향 통신을 구현하여 클라이언트와 서버 간의
                      즉각적 데이터 전송 및 업데이트를 처리하는 방법을
                      숙지했습니다.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={TailwindIcon}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px]"
                  />
                  <span className="text-white">TailwindCSS</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      유연한 디자인 시스템을 활용해 클래스 기반의 스타일링을
                      통해 신속하게 반응형 UI를 구축하는 방법을 이해.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={SolidityIcon}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px] bg-white"
                  />
                  <span className="text-white">Solidity</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      스마트 계약을 작성하고 배포하여 블록체인에서 자동화된 거래
                      및 애플리케이션 로직을 구현하는 방법 숙지 했습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={NextIcon}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px] bg-white"
                  />
                  <span className="text-white">NextJS</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      서버 사이드 렌더링, 정적 사이트 생성, 그리고 API 라우팅을
                      통해 성능 최적화된 React 애플리케이션을 개발하는 방법을
                      숙지
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full">
            <div className="py-1 px-4 my-5 text-xl border-2 rounded-2xl w-[110px]">
              <p className="text-white">#Server</p>
            </div>
            <div className="flex flex-row gap-5 py-5">
              <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                <div className="flex flex-col w-[90px] justify-center items-center">
                  <img
                    src={MySQLIcon}
                    alt="Javascript"
                    className="object-contain w-[60px] h-[60px] bg-white"
                  />
                  <span className="text-white">MySQL</span>
                </div>
                <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                  <li>
                    <p className="text-xs">
                      관계형 데이터베이스 설계, SQL 쿼리 작성, 데이터베이스 관리
                      및 최적화 방법을 통해 효율적인 데이터 저장과 검색을
                      구현하는 기술을 숙지했습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative w-full h-full">
            <div className="py-1 px-4 my-5 text-xl border-2 rounded-2xl w-[200px]">
              <p className="text-white">#Tooling/ DevOps</p>
            </div>
            <div className="flex flex-row flex-wrap gap-3 py-5">
              <div className="flex flex-row gap-5 py-5">
                <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                  <div className="flex flex-col w-[90px] justify-center items-center">
                    <img
                      src={EC2Icon}
                      alt="Javascript"
                      className="object-contain w-[60px] h-[60px] bg-white"
                    />
                    <span className="text-white">AWS EC2</span>
                  </div>
                  <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                    <li>
                      <p className="text-xs">
                        가상 서버 인스턴스를 생성하고 관리하여 클라우드 기반
                        애플리케이션을 배포하고 확장 가능.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-3 py-5">
                <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                  <div className="flex flex-col w-[90px] justify-center items-center">
                    <img
                      src={AWSS3Icon}
                      alt="Javascript"
                      className="object-contain w-[60px] h-[60px] bg-white"
                    />
                    <span className="text-white">AWS S3</span>
                  </div>
                  <ul className="absolute flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                    <li>
                      <p className="text-xs">
                        확장 가능한 객체 스토리지 서비스로 파일 저장, 관리,
                        그리고 고가용성 데이터 배포를 효율적으로 구현 가능.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-row gap-3 py-5">
                <div className="relative borer-1 border-gray-500 rounded-xl p-4 group middle justify-center items-center flex flex-row hover:pr-[200px] duration-500 bg-black">
                  <div className="flex flex-col w-[90px] justify-center items-center">
                    <img
                      src={GithubActionsIcon}
                      alt="Javascript"
                      className="object-contain w-[60px] h-[60px] bg-white"
                    />
                    <span className="text-white">GithubActions</span>
                  </div>
                  <ul className="absolute pl-3 flex-col py-4 group-hover:opacity-100 group-hover:left-[110px] text-white group-hover:duration-75 flex w-[150px] h-[100%] left-[150px] overflow-hidden opacity-0">
                    <li>
                      <p className="text-xs">
                        자동화된 CI/CD 파이프라인을 설정하고, .yml 파일을
                        작성하여 코드 변경 시 자동으로 테스트, 빌드, 배포를 수행
                        가능.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
