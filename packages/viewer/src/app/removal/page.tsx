export default function Page() {
  return (
    <>
      <h2 className="text-center">删除政策</h2>
      <p>
        如果您认为我们保存的帖子侵犯了您的权益或违反公序良俗，请发邮件至{" "}
        <a href="mailto:lda@piterator.com">lda@piterator.com</a>{" "}
        申请删除。您的邮件应该包含：
      </p>
      <ol>
        <li>要删除的帖子编号（一个或多个）；</li>
        <li>
          我们应该删除这个/这些帖子的理由（不会被公开，但这是我们判断是否删帖的依据）；
        </li>
        <li>*申请者的洛谷用户编号；</li>
        <li>
          *需要展示给访问者的文本内容（例如，可以包含公开的删除原因、用户应该查阅的辟谣帖等），每个帖子须对应一段文字。
        </li>
      </ol>
      <p>上述标注星号（*）的内容会在被删除的帖子页面上展示。</p>
      <p>我们一般将会在一天内回复您。</p>
    </>
  );
}
