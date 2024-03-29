import GetAvatar from "./GetAvatar";

const Form = ({
  data,
  handleInput,
  url,
  handleClickCreateCard,
  isCard,
  isError,
  updateAvatar,
  updateProjectImg,
}) => {
  return (
    <section className="form">
      <h2 className="form__title">Información</h2>
      <p className="form__subtitle">Cuéntanos sobre el proyecto</p>
      <hr className="form__line" />

      <fieldset className="form__project">
        <input
          className="form__input"
          type="text"
          placeholder="Nombre del proyecto *"
          name="name"
          id="name"
          value={data.name}
          onInput={handleInput}
          required
        />
        <input
          className="form__input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan *"
          value={data.slogan}
          onChange={handleInput}
          pattern="/^[A - ZÁ - üñÑ]+$/i"
        />
        <div className="form__project--links">
          <input
            className="form__input"
            type="text"
            name="repo"
            id="repo"
            placeholder="Repo *"
            value={data.repo}
            onInput={handleInput}
            required
          />
          <input
            className="form__input"
            type="text"
            placeholder="Demo *"
            name="demo"
            id="demo"
            value={data.demo}
            onChange={handleInput}
            required
            pattern="/^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/"
          />
        </div>
        <input
          className="form__input"
          type="text"
          placeholder="Tecnologías *"
          name="technologies"
          id="technologies"
          value={data.technologies}
          onChange={handleInput}
          pattern="/^[A - ZÁ - üñÑ]+$/i"
        />
        <textarea
          className="form__input--textarea"
          type="text"
          placeholder="Descripción *"
          name="desc"
          id="desc"
          value={data.desc}
          onChange={handleInput}
          required
        ></textarea>
      </fieldset>

      <p className="form__subtitle">Cuéntanos sobre la autora</p>
      <hr className="form__line" />

      <fieldset className="form__autor">
        <input
          className="form__input"
          type="text"
          placeholder="Nombre *"
          name="autor"
          id="autor"
          value={data.autor}
          onChange={handleInput}
          required
          pattern="/^[A - ZÁ - üñÑ]+$/i"
        />
        <input
          className="form__input"
          type="text"
          placeholder="Trabajo *"
          name="job"
          id="job"
          value={data.job}
          onChange={handleInput}
          required
          pattern="/^[A - ZÁ - üñÑ]+$/i"
        />

        <section className="form__autor--buttons">
          <GetAvatar
            value={"Subir foto de proyecto"}
            className={"form__btn"}
            updateAvatar={updateAvatar}
          />

          <GetAvatar
            value={"Subir foto de autora"}
            className={"form__btn"}
            updateAvatar={updateProjectImg}
          />
        </section>
      </fieldset>

      <section className="form__create-card">
        <button className="form__btn" onClick={handleClickCreateCard}>
          Crear Tarjeta
        </button>
        <p className={isCard ? "linkCard" : "hidden"}>
          {" "}
          {isError ? `La tarjeta ha sido creada:` : "Faltan datos por rellenar"}
        </p>
        <a href={url} className="" target="_blank" rel="noreferrer">
          {url}
        </a>
      </section>
    </section>
  );
};

export default Form;
