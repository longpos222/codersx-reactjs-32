import React, { Fragment } from "react";
import defaultCover from "../images/default-cover.jpg";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Col,
  Row,
} from "reactstrap";

function CustomModal({
  isOpen,
  toggle,
  className,
  modalTitle,
  submitButtonFunc,
  cancleButtonFunc,
  book,
  handleChange,
}) {
  return (
    <Fragment>
      <Modal isOpen={isOpen} toggle={toggle} className={className}>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <div>
                    <img
                      src={book.coverUrl ? book.coverUrl : defaultCover}
                      width="150px"
                      heigh="100%"
                      alt=""
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md={8}>
                <FormGroup>
                  <Label for="rating">Rating (*/5)</Label>
                  <Input
                    type="select"
                    name="rating"
                    id="rating"
                    onChange={(e) => handleChange(e, "rating")}
                  >
                    <option>0</option>
                    <option>0.5</option>
                    <option>1.0</option>
                    <option>1.5</option>
                    <option>2.0</option>
                    <option>2.5</option>
                    <option>3.0</option>
                    <option>3.5</option>
                    <option>4.0</option>
                    <option>4.5</option>
                    <option>5.0</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for="title">Book Title</Label>
              <Input
                id="title"
                name="title"
                onChange={(e) => handleChange(e, "title")}
                value={book.title}
                placeholder="Type title here..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="coverUrl">Upload book cover</Label>
              <CustomInput
                type="file"
                name="coverUrl"
                id="coverUrl"
                label="Click to upload book cover images ..."
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                onChange={(e) => handleChange(e, "description")}
                value={book.description}
                id="description"
                placeholder="Type description here ..."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitButtonFunc}>
            Submit
          </Button>
          <Button color="secondary" onClick={cancleButtonFunc}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
}

export default CustomModal;
