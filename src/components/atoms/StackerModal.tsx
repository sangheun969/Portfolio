import React from "react";
import Button from "./Button";

interface ModalProps {
  onClose: () => void;
}

const StackerModal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <>
      <div className="w-[800px] h-[90%] mx-auto my-auto fixed inset-0 bg-white rounded-lg flex justify-center flex-col items-center">
        <p className="text-black text-[50px]  font-['Tenada']">STACKER-LABS</p>
        <div className="gap-6">
          <div className="font-['Tenada'] w-[500px] py-3 flex flex-col justify-between text-sm gap-3">
            <ul>
              <li className="font-bold">프로젝트 세팅</li>
              <li>전역상태 관리와 CLIENT/SERVER 간의 요청 응답을 확인.</li>
            </ul>
            <ul>
              <li className="font-bold">포스팅</li>
              <li>사용자가 게시글의 필드와 에디터를 제공</li>
            </ul>
            <ul>
              <li className="font-bold">로그인</li>
              <li>사용자 로그인 여부를 확인</li>
            </ul>
            <ul>
              <li className="font-bold">댓글</li>
              <li>
                게시글에 작성된 댓글들을 작성,수정,대댓글 기능을 추가해
                페이지별로 로드하여 사용자 경험을 제공.
              </li>
            </ul>
            <ul>
              <li className="font-bold">반응형</li>
              <li>
                모바일, 노트북, 데스크탑 screens 속성을 사용하여 다양한 화면
                크기 및 스타일 설정
              </li>
            </ul>
          </div>
          <div>
            <ul className="font-['Tenada'] w-[500px] py-3  flex flex-col justify-between text-xs gap-5">
              <li>댓글 기능: 댓글 관리는 부모-자식 관계로 구현</li>
              <li>
                반응형: Tailwind CSS를 사용하여 반응형으로 디자인되었으며,
                모바일, 태블릿, 데스크탑 환경에서 일관된 UI/UX를 제공할 수
                있었습니다.
              </li>
              <li>
                실시간 UI 업데이트: React 라이브러리가 단방향 데이터 흐름을 통해
                게시글을 수정하거나 삭제한 결과를 실시간으로 반영되어 UI
                업데이트의 원리를 깊이 이해할 수 있었습니다.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Button variant="sendBtn1" size="md" label="닫기" onClick={onClose} />
        </div>
      </div>
    </>
  );
};

export default StackerModal;
