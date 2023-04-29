import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styles from './Message.module.css';

type Values = {
  customerName: string;
  contactPhone: string;
  message: string;
};
type Errors = {
  customerName?: string;
  contactPhone?: string;
  message?: string;
};

const validate = (values: Values) => {
  const errors: Errors = {};

  if (!values.customerName) {
    errors.customerName = 'Обязательно заполните';
  } else if (values.customerName.length > 15) {
    errors.customerName = 'Максимальная длина 15 букв';
  }

  if (values.message.length > 100) {
    errors.message = 'Максимальная длина 100 символов';
  }

  if (!/^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{7,10}$/i.test(values.contactPhone)) {
    errors.contactPhone = 'Неправильный номер телефона';
  }

  return errors;
};

const Message = () => {
  const [byeMessage, setByeMessage] = useState(false);
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3>Заказ звонка</h3>
        <Formik
          initialValues={{ customerName: '', message: '', contactPhone: '', formOfPayment: 'cash' }}
          validate={validate}
          onSubmit={(values) => {
            // alert(JSON.stringify(values));
            setByeMessage(true);
          }}>
          {({ errors, touched }) => (
            <Form>
              <div className={styles.form__item}>
                <label htmlFor="customerName">Ваше имя: </label>
                <Field
                  name="customerName"
                  type="text"
                  placeholder="Иван"
                />
                {touched.customerName && errors.customerName ? (
                  <div className={styles.form__error}>{errors.customerName}</div>
                ) : null}
              </div>
              <div className={styles.form__item}>
                <label htmlFor="contactPhone">Номер телефона: </label>
                <Field
                  name="contactPhone"
                  type="text"
                  placeholder="+796032222333"
                />
                {touched.contactPhone && errors.contactPhone ? (
                  <div className={styles.form__error}>{errors.contactPhone}</div>
                ) : null}
              </div>
              <div className={styles.form__item}>
                <label htmlFor="message">Сообщение: </label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Текст сообщения"
                />
                {touched.message && errors.message ? (
                  <div className={styles.form__error}>{errors.message}</div>
                ) : null}
              </div>
              <div className={styles.form__item && styles.radio}>
                <h3>Способ связи:</h3>
                <div className={styles.radio__buttons}>
                  <label>
                    <Field type="radio" name="formOfPayment" value="cash" />
                    Звонок{' '}
                  </label>
                  <label>
                    <Field type="radio" name="formOfPayment" value="card" />
                    Viber
                  </label>
                  <label>
                    <Field type="radio" name="formOfPayment" value="card" />
                    Telegram
                  </label>
                  <label>
                    <Field type="radio" name="formOfPayment" value="card" />
                    WhatsApp
                  </label>
                </div>
              </div>
              <div className={styles.form__buttons}>
                <button
                  type="button"
                  onClick={onSuccess}>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 13L1 6.93015L6.86175 1"
                      stroke="#D3D3D3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span> Вернуться </span>
                </button>
                <button type="submit" className={styles.button}>
                  <span> Сделать заказ </span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={byeMessage ? styles.byeMessage : (`${styles.byeMessage} ${styles.unvisible}`)}>
        <h3>Ваш заказ принят.</h3>
        <span>Наш сотрудник свяжется с Вами.</span>
        <button onClick={onSuccess} type="button" className={styles.bye_button}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Message;
